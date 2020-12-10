export default {
  "name": {
      "type": "text",
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
      "type": "text",
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
      "value": 55,
      "ui": {
        "label": "Age",
        "readonly": true,
        "group": "data",
        "position": 3,
        "placeholder": "Your age here"
      }
  },
  "address": {
      "type": "text",
      "ui": {
        "label": "Street",
        "group": "location"
      }
  },
  "city": {
      "type": "text",
      "ui": {
        "label": "City",
        "group": "location"
      }
  },
  "EU": {
      "type": "checkbox",
      "ui": {
        "label": "Inside EU",
        "group": "location"
      }
  },
  "color": {
      "type": "text",
      "value": "pink",
      "ui": {
        "label": "Favourite color",
        "group": "misc",
        "placeholder": "Favourite color"
      },
      "validation": {
          "Neos.Neos\/Validation\/validatePresence": {
            "presence": true,
            "ignoreBlank": true
          }
      }
  },
  "description": {
      "type": "textarea",
      "ui": {
        "label": "Description",
        "group": "misc",
        "placeholder": "Color description"
      }
  }
}
