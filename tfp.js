
var memberOne = new CreateTaskForceMember("Бекарыс Сымбат", "@simationere", "Шымкент", 120);

var memberTwo = new CreateTaskForceMember("Нагай София", "@orionnsi", "Тараз", 250);

var memberThree = new CreateTaskForceMember("Нармаханбет Әбілқайыр", "@Abilkair1", "Шымкент", 69 + 120 + 15);

var memberFour = new CreateTaskForceMember("Мамыр Аделя", "@a_adelm_m", "Шымкент", 21 +25 +25 + 200);

var memberFive = new CreateTaskForceMember("Сайдиганиев Искандар", "@Skalex0", "Шымкент", 21+ 120 );

var memberSix = new CreateTaskForceMember("Амантай Еркежан", "@irliastcaa", "Шымкент", 100 + 160 + 160 + 100);

var memberSeven = new CreateTaskForceMember("Елубаев Бекзат", "@CT5557", "Жезқазған", 75);

var memberEight = new CreateTaskForceMember("Қуанар Кәусар", "@nncmellie", "Кызылорда", 120);

var memberNine = new CreateTaskForceMember("Мырза Асель", "@asymeta", "Кызылорда", 45);

var memberTen = new CreateTaskForceMember("Нурлыбеков Бекнур", "@wnbkj", "Кызылорда", 15*3);

var memberEleven = new CreateTaskForceMember("Каримова Айша", "@kozel_az", "Астана", 200);

var memberTwelve = new CreateTaskForceMember("Аскар Альжан", "@alzhik03", "Шымкент", 75);



var taskForceMembers = [memberOne, memberTwo, memberThree, memberFour, memberFive, memberSix,
                        memberSeven, memberEight, memberNine, memberTen, memberEleven, memberTwelve];

taskForceMembers.sort((a,b) => b.taskForcePoints - a.taskForcePoints);

fillTheTable(taskForceMembers);





function CreateTaskForceMember(name, tag, region, taskForcePoints){
    this.name = name;
    this.tag = tag;
    this.region = region;
    this.taskForcePoints = taskForcePoints;
}

function fillTheTable(taskForceMembers){
    
    var tableHTML = "";

    for(var i=0; i<taskForceMembers.length; i++){
        if(i==0){
            tableHTML += "<tr class='table-warning'>"
        }
        else{
            tableHTML += "<tr>";
        }
        

        tableHTML += "<th scope='row'>";
        tableHTML += (i+1);
        tableHTML += "</th>";

        tableHTML += "<td>"
        tableHTML += taskForceMembers[i].name;
        tableHTML += "</td>"


        tableHTML += "<td>"
        tableHTML += taskForceMembers[i].taskForcePoints;
        tableHTML += "</td>"

        tableHTML += "</tr>";
    }
    console.log(tableHTML);
    $("#main-table").html(tableHTML);
}