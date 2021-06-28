var currentPage=0;

function ajaxResponse(res){
	currentPage = 1;
	fetchedScores = res.data;
	var index = (currentPage-1)*8 + 1;
	var table = document.getElementById("scoreTable");
	UpdateTable(table,index,res.data);
}

function emptyTable(table){
	while(table.rows[1]!== undefined){
		table.deleteRow(1);
	}
}

function UpdateTable(table,index,data){
	emptyTable(table);
	var i=index;
	while(i < index + 8 && data !== null && data[i-1] !== undefined){
		var row = table.insertRow(i-index+1);
		var rankingcell = row.insertCell(0);
		var usernamecell = row.insertCell(1);
		var pointscell = row.insertCell(2);
		rankingcell.innerText = data[i-1].Ranking;
		usernamecell.innerText = data[i-1].Username;
		pointscell.innerText = data[i-1].Score;
		i++;
	}
}

function NextPage(){
	var length = fetchedScores.length;
	if (currentPage < length/8)
		currentPage++;
	var iStart = (currentPage-1)*8 + 1;
	table = document.getElementById("scoreTable");
	UpdateTable(table,iStart,fetchedScores);
}

function PreviousPage(){
	var length = fetchedScores.length;
	if (currentPage > 1)
		currentPage--;
	var iStart = (currentPage-1)*8 + 1;
	table = document.getElementById("scoreTable");
	UpdateTable(table,iStart,fetchedScores);
}