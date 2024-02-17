This is a URL shortner using node JS 

extra npm packages:
-unique-short-id: Used for generating unique ids.


Sure, assuming your application is running on port 3000, here are the complete URLs:

1. **GenerateShortId_OF_URL**:
   - **URL**: `http://localhost:3000/url`
   - **Method**: POST
   - **Purpose**: Generates a unique ID for a given URL and stores it in the database.
   - **Returns**: JSON response containing the generated ID.

2. **Get_URL_BY_ID**:
   - **URL**: `http://localhost:3000/url/:shortID`
   - **Method**: GET
   - **Purpose**: Retrieves the original URL associated with a unique ID from the database.
   - **Updates**: Visit history.
   - **Redirects**: User to the original URL.

3. **Get_Analytics**:
   - **URL**: `http://localhost:3000/url/analytics/:shortID`
   - **Method**: GET
   - **Purpose**: Retrieves analytics data (total clicks and timestamps) for a URL with a specific ID from the database.
   - **Returns**: JSON response containing total clicks and visit timestamps.

