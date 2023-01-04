# image-processor

## Introduction
This is a simple image processing API that allows placing images into the frontend with the size set via URL parameters for rapid prototyping. Rather than needing to resize and upload multiple copies of the same image to be used throughout the site, the API will handle resizing and serving stored images.

## API Reference
- Base URL: The backend app is hosted at the default localhost (http://127.0.0.1:3000/)
- API Key: This version of the app does not require API keys to authenticate requests.

### Getting Started
1. `npm install` - to install the required packages and their dependencies
2. `npm build` - to transpile the source code into equivalent JavaScript
3. `npm test` - to run specs and test each endpoint with expected output
4. `npm start` - to start the API server on development environment
5. `npm serve` - to start the API server on production environemnt


## Endpoint Library
After installing the dependencies and starting the server, these endpoints can be tested:
### GET '/api/metadata?filename={string}'
* General:
    - Fetches a short summarized metadata information about the image
    - Request Arguments: `filename` - string
* Example: (http://127.0.0.1:3000/api/metadata?filename=sample)
    - This returns the following:
    ``` "Width: 300, Height: 300, Format: jpeg" ```

### GET '/api/resize?filename={string}&width={integer}&height=&{integer}
* General:
    - Fetches a resized version of the image based on the request paramaters
    - Request Arguments: `filename` - string, `width` - integer, `height` - integer
* Example: (http://localhost:3000/api/resize?filename=sample&width=200&height=200)
    - This returns a 200 by 200 image