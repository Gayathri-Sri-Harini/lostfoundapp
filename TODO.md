# TODO: Fix Frontend-Backend-Database Connection

- [x] Fix backend imports: Update itemController.js and itemRoutes.js to import from "../models/itemModel.js" instead of "../models/Item.js"
- [x] Update itemRoutes.js: Remove inline POST handler and use controller functions (addItem and getItems)
- [x] Update frontend/src/api.js: Import axios, define API_URL, add getItems and addItem functions
- [x] Update ItemForm.js: Use API_URL and addItem function from api.js, handle item addition and refresh
- [x] Update App.js: Add refreshItems function and pass it to ItemForm component
