import faunadb from "faunadb"

export const db = new faunadb.Client({
	secret: process.env.REACT_APP_LOCAL___FAUNADB_KEY as string,
})
export const q = faunadb.query
