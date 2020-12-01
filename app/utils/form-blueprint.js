export default {
    "meta": {
        "total": 48,
        "size": 48,
        "offset": 0,
        "limit": 25,
        "current": 0
    },
    "links": {
        "self": "http:\/\/127.0.0.1:8081\/api\/v1\/nodetypes",
        "next": "http:\/\/127.0.0.1:8081\/api\/v1\/nodetypes?page%5Bnumber%5D=2&page%5Bsize%5D=25",
        "first": "http:\/\/127.0.0.1:8081\/api\/v1\/nodetypes?page%5Bnumber%5D=1&page%5Bsize%5D=25",
        "last": "http:\/\/127.0.0.1:8081\/api\/v1\/nodetypes?page%5Bnumber%5D=2&page%5Bsize%5D=25"
    },
    "data": [
        {
            "type": "nodetypes",
            "id": "cloud-core-list",
            "attributes": {
                "aggregate": true,
                "label": "List",
                "icon": "list",
                "help": "",
                "properties": {
                    "name": {
                        "type": "string",
                        "ui": {
                          "label": "first name",
                          "group": "data",
                          "position": 1,
                          "placeholder": "Your name here",
                        },
                        "validation": {
                            "Neos.Neos\/Validation\/validatePresence": {
                              "presence": true,
                              "ignoreBlank": true
                            },
                            "Neos.Neos\/Validation\/validateLength": {
                              "max": 50
                            }
                        }
                    },
                    "lastName": {
                        "type": "string",
                        "ui": {
                          "label": "last name",
                          "group": "data",
                          "position": 2,
                          "placeholder": "Your last name here",
                        },
                        "validation": {
                            "Neos.Neos\/Validation\/validatePresence": {
                              "presence": true,
                              "ignoreBlank": true
                            }
                        }
                    },
                    "age": {
                        "type": "number",
                        "value": 1300,
                        "ui": {
                          "label": "Age",
                          "group": "data",
                          "position": 3,
                          "placeholder": "Your age here"
                        }
                    },
                    "age": {
                        "type": "number",
                        "value": 1300,
                        "ui": {
                          "label": "Age",
                          "group": "data",
                          "position": 3,
                          "placeholder": "Your age here"
                        }
                    },
                    "address": {
                        "type": "string",
                        "ui": {
                          "label": "Street",
                          "group": "location"
                        }
                    },
                    "city": {
                        "type": "string",
                        "ui": {
                          "label": "City",
                          "group": "location"
                        }
                    },
                    "color": {
                        "type": "string",
                        "value": "pink",
                        "ui": {
                          "label": "Favourite color",
                          "group": "misc",
                          "placeholder": "Favourite color"
                        }
                    }

                }
            }
        }
    ]
}
