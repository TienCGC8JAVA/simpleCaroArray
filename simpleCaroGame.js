
let board = [];
let data = "";

for (let i = 0; i < 10; i++)
{
    board[i] = [0,0,0,0,0,0,0,0,0,0];
}
for (let i = 0; i < 10 ; i++)
{
    data += "<br>";
    for (let j = 0; j < 10; j++)
    {
        data += board[i][j] + "&nbsp;&nbsp";
    }
}

document.getElementById("caroGame").innerHTML = data;

function changeValue()
{
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
        for (let i = 0; i < 10; i++)
            {
                data +="<br>";
                for (let j = 0; j < 10; j++)
            {
                data += board[i][j] + "&nbsp;&nbsp;&nbsp;"
            }
        }
    document.getElementById("caroGame").innerHTML = "<hr>" + data;

}