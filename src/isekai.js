// Stare into the Abyss
const Isekai = ({
    SET: (obj) => 
        Object.entries(obj).
            forEach(([ key, value ]) => {
                Isekai[key] = Object.assign(value, {
                    ...Isekai[key], 
                    ...value
                });
            }),

    EQUIP: (obj) => 
        Object.values(obj).
            forEach((fn) => 
                fn(Isekai) 
            )
});

export default Isekai;
