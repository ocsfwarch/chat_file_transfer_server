# CHAT File Transfer

The purpose of this project is to allow a user to interact with files over the Internet. This api server provides the support for file transfer functionality, view a file, download a file, and upload a file.

## Description

The user is presented an application which will allow them to view/edit/search file content, download file content, or upload file content. File content refers to the particular file format the user may be interacting with.

## Source Files

| Folder/file path                                     | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `/src/server.js`                                     | Provides the interface connection to the app.                |
| `/src/app.js`                                        | Provides the user functionality access to the app.           |
| `/src/components/TestRoute/test.router.js`           | This provides a test route for verification of connectivity. |
| `/src/components/TestRoute/test.controller.js`       | This provides the route access to the data.                  |
| `/src/components/CHATFiles/chat_files_router.js`     | This provides the GET and POST routes.                       |
| `/src/components/CHATFiles/chat_files_controller.js` | This provides the actions associated with the route.         |
| `/src/components/CHATFiles/chat_files_service.js`    | This provides the access to the data for the action.         |
| `/src/errors/errorHandler.js`                        | This is a generic `500` error handler.                       |
| `/src/errors/methodNotAllowed.js`                    | This is a generic `404` error handler.                       |
| `/src/errors/notFound.js`                            | This is a generic `405` error handler.                       |
| `/src/test/base_test.spec.js`                        | This contains the base test cases.                           |
| `/src/test/chat_files_test.spec.js`                  | This contains the chat file transfer test cases.             |

## Installation

1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm run start:dev` to start your server in development mode.
4. Use Postman or a browser to check the server at `localhost:5000/test`

- The server should return:
  `{ "data":{ "title":"test title", "description":"this is a test data structure", "results":"SUCCESS" } }`

## Testing

- There is are 5 test cases.
- Run `npm run test`.
