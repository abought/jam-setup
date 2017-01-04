/* jshint node: true, esnext: true */

var CREATE = 'CREATE';
var UPDATE = 'UPDATE';
var READ = 'READ';

module.exports = [{
    id: 'experiments',
    attrs: {
        // schema: {},
        permissions: {
            '*': READ
        }
    }
}, {
    id: 'accounts',
    attrs: {
      schema: {
        "type": "jsonschema",
        "schema": {
          "type": "object",
          "required": [
            "password"
          ],
          "id": "/",
          "properties": {
            "password": {
              "id": "password",
              "pattern": "^\\$2b\\$1[0-3]\\$\\S{53}$",
              "type": "string"
            }
          }
        }
      },
        permissions: {
            '*': CREATE
        },
        plugins: {
            user: {
              createdIsOwner: true,
            }
      },
    }
}, {
    id: 'thumbnails',
    attrs: {
        state: 'mongo',  // Can only set this one on creation, not updating
        permissions: {
            '*': READ
        }
    }
}];
