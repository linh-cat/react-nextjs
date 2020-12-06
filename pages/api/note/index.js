import nc from "next-connect"
import notes from "../../../src/data/data."

const handle = nc()
.get((req, res) => {
    res.json({data: notes})
})

export default handle