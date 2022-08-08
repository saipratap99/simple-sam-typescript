import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { UserService } from "../../services/users.service";


export const getUsersHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    try {
        var usersService = new UserService();
        response = {
            statusCode: 200,
            body: JSON.stringify(usersService.getUsers()),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
    return response;
};
