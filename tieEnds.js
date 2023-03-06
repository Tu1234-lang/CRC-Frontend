async function fillTheNum(){
	url = "https://cloudresumepy.azurewebsites.net/api/httptrigger310";
	post = await fetch(url).then((res) => res.json());
	document.getElementById("num").innerText = post.PartitionKey;
}
fillTheNum();