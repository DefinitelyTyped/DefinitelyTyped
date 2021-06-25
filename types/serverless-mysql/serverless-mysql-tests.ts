// Require and initialize outside of your main handler
import * as createMysql from 'serverless-mysql'

const mysql = createMysql({
    config: {
        host     : process.env.ENDPOINT,
        database : process.env.DATABASE,
        user     : process.env.USERNAME,
        password : process.env.PASSWORD
    }
})

// Main handler function
exports.handler = async (event: any, context: any) => {
    // Run your query
    const results = await mysql.query('SELECT * FROM table')

    // Run clean up function
    await mysql.end()

    // Return the results
    return results
}
