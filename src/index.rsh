"reach 0.1";

const Command = Data({
    Get: Null,
    Set: UInt,
});

const IUser = {
    useCommand: Fun([], Command),
    seeValue: Fun([UInt], Null),
    valueChanged: Fun([UInt, Address], Null),
};

export const main = Reach.App({}, [ParticipantClass("User", IUser)], (User) => {
    User.only(() => { });
    User.publish();

    const value = parallelReduce(0)
        .invariant(balance() === 0)
        .while(true)
        .case(
            User,
            (() => ({
                msg: declassify(interact.useCommand()),
            })),
            (() => 0),
            ((command) => {
                return command.match({
                    Get: () => {
                        User.only(() => {
                            interact.seeValue(value);
                        });
                        return value;
                    },
                    Set: (v) => {
                        const address = this;
                        User.only(() => {
                            interact.valueChanged(v, address);
                        });
                        return v;
                    },
                });
            })
        )
        .timeout(1024, () => {
            User.publish();
            return value;
        });
    commit();
    exit();
});