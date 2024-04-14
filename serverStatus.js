// Define an enum for server status and messages
const ServerStatus = {
  SUCCESS: { code: 200, message: 'Success' },
  CREATED: { code: 201, message: 'Resource Created' },
  BAD_REQUEST: { code: 400, message: 'Bad Request' },
  UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
  FORBIDDEN: { code: 403, message: 'Forbidden' },
  NOT_FOUND: { code: 404, message: 'Not Found' },
  INTERNAL_SERVER_ERROR: { code: 500, message: 'Internal Server Error' },
  SERVICE_UNAVAILABLE: { code: 503, message: 'Service Unavailable' },
};

// Export the enum for use in other modules
module.exports = ServerStatus;

// Utility functions to work with the enum
const getStatusCode = (status) => {
  return status.code;
};

const getStatusMessage = (status) => {
  return status.message;
};

const getStatusFromCode = (code) => {
  for (const key in ServerStatus) {
    if (ServerStatus[key].code === code) {
      return ServerStatus[key];
    }
  }
  return null;
};

// Export utility functions
module.exports = {
  ServerStatus,
  getStatusCode,
  getStatusMessage,
  getStatusFromCode,
};
