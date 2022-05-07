
function SapoWeb(1) {
    axios.get("http://localhost:8080/api/banner-status/random/" + 1).then(res => {
        console.log("data random  lay ra: ", res.data)
    })
}
