export default {
  "fullName": {
      "type": "text",
      "ui": {
        "label": "Full name",
        "group": "data",
        "position": 1,
        "editorOptions": {
          "placeholder": "Your name here",
        }
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
  "age": {
      "type": "number",
      "value": 55,
      "ui": {
        "label": "Age",
        "group": "data",
        "position": 3,
        "editorOptions": {
          "readonly": true,
          "placeholder": "Your age here"
        }
      }
  },
  "gender": {
      "type": "power-select",
      "ui": {
        "label": "Gender",
        "group": "data",
        "editorOptions": {
          "placeholder": "Choose gender",
          "searchEnabled": true,
          "disabled": false,
          "values": ['female','male','not binary']
        },
      }
  },
  "tag": {
      "type": "power-select-multiple",
      "ui": {
        "label": "Tag",
        "group": "data",
        "editorOptions": {
          "placeholder": "Tags...",
          "searchEnabled": true,
          "values": ['begginer','advanced','medium','expert'],
          "closeOnSelect": false
        },
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
        "editorOptions": {
          "placeholder": "Favourite color"
        }
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
        "editorOptions": {
          "placeholder": "Color description"
        }
      }
  }
}
