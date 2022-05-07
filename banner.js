import axios from "axios";
function SapoWeb(sectionID) {
    axios.get("http://localhost:8080/api/banner-status/random/" + sectionID).then(res => {
        console.log("data random  lay ra: ", res.data)
    })
}
