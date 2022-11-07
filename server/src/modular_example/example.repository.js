// define your models and logic here

export default () => {
    const find = async (data = {}) => {
        return Promise.resolve([
            { id: 1, name: "Yo12", post: "How is your dad?" },
            { id: 2, name: "Nomo", post: "Live life, love life" },
            {
                id: 3,
                name: "Momo",
                post: "Nothing feels better than JavaScript",
            },
            { id: 4, name: "NATE12", post: "You all lied to me" },
        ]);
    };
    const findOne = async (data = {}) => {
        if (data != "")
            return Promise.resolve({
                id: 1,
                name: "Yo12",
                post: "How is your dad?",
            });
        throw new Error("No data found!!");
    };
    Object.freeze({
        find,
    });
};
