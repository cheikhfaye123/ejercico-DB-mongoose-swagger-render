
module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "le titre",
                        example: "faire une commande"
                    },
                    completed: {
                        type: "boolean",
                        description: "etat de la tache",
                        example: false
                    }
                }
            }
        }
    }
};
