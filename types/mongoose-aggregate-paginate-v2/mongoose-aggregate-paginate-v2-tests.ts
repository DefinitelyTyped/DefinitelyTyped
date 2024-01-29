/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 * Adapted to mongoose-aggregate-paginate-v2 by Alexandre Croteau <https://github.com/acrilex1>
 */

import { Aggregate, AggregatePaginateModel, AggregatePaginateResult, model, PaginateOptions, Schema } from "mongoose";
import mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
import { Request, Response, Router } from "express";

// #region Test Models
interface User {
    email: string;
    username: string;
    password: string;
    hobbies: string[];
}

interface HobbyStats {
    hobby: string;
    count: number;
}

const UserSchema: Schema = new Schema<User>({
    email: String,
    username: String,
    password: String,
    hobbies: [String],
});

UserSchema.plugin(mongooseAggregatePaginate);

const UserModel = model<User, AggregatePaginateModel<User>>("User", UserSchema);
// #endregion

// #region Test Paginate
const router: Router = Router();

router.get("/users.json", async (req: Request, res: Response) => {
    const aggregate: Aggregate<User[]> = UserModel.aggregate();

    const descending = true;
    const options: PaginateOptions = {
        sort: { username: descending ? -1 : 1 },
        page: 1,
        limit: 10,
        customLabels: {
            totalDocs: "totalDocsCustom",
            limit: "limitCustom",
            page: "pageCustom",
            totalPages: "totalPagesCustom",
            docs: "docsCustom",
            nextPage: "nextPageCustom",
            prevPage: "prevPageCustom",
        },
    };

    try {
        const value: AggregatePaginateResult<User> = await UserModel.aggregatePaginate(aggregate, options);
        console.log("totalDocs: " + value.totalDocsCustom);
        console.log("limit: " + value.limitCustom);
        console.log("page: " + value.pageCustom);
        console.log("nextPage: " + value.nextPageCustom);
        console.log("prevPage: " + value.prevPageCustom);
        console.log("totalPages: " + value.totalPagesCustom);
        console.log("offset: " + value.offset);
        console.log("docs: ");
        console.dir(value.docsCustom);
        return res.json(value);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});

router.get("/stats/hobbies.json", async (req: Request, res: Response) => {
    const aggregate: Aggregate<HobbyStats[]> = UserModel.aggregate()
        .unwind("$hobbies")
        .group({
            _id: "$hobbies",
            count: { $count: {} },
        })
        .addFields({ hobby: "$_id" })
        .project({ _id: 0 })
        .sort({ count: -1 });

    const options: PaginateOptions = {
        page: 1,
        limit: 10,
    };

    try {
        const value: AggregatePaginateResult<HobbyStats> = await UserModel.aggregatePaginate(aggregate, options);
        return res.json(value);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});

// Handle useFacet option
router.get("/stats/hobbies.json", async (req: Request, res: Response) => {
    const aggregate: Aggregate<HobbyStats[]> = UserModel.aggregate()
        .unwind("$hobbies")
        .group({
            _id: "$hobbies",
            count: { $count: {} },
        })
        .addFields({ hobby: "$_id" })
        .project({ _id: 0 })
        .sort({ count: -1 });

    const options: PaginateOptions = {
        page: 1,
        limit: 10,
        useFacet: false,
    };

    try {
        const value: AggregatePaginateResult<HobbyStats> = await UserModel.aggregatePaginate(aggregate, options);
        return res.json(value);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
// #endregion
