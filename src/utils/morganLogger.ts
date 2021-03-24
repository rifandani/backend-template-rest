import morgan from 'morgan';
import json from 'morgan-json';
// files
import winstonLogger from './winstonLogger';

const format = json({
  method: ':method',
  url: ':url',
  status: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time',
});

// HTTP logger middleware
const httpLogger = morgan(format, {
  stream: {
    write: (message) => {
      const { method, url, status, contentLength, responseTime } = JSON.parse(
        message
      );

      winstonLogger.info('Morgan ~ HTTP Access Log', {
        timestamp: new Date().toString(),
        method,
        url,
        status: Number(status),
        contentLength,
        responseTime: Number(responseTime),
      });
    },
  },
});

export default httpLogger;
