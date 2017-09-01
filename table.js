/**
 * Created by q6725_000 on 2017/8/23.
 */
var TABLE;
TABLE = (function(){
    //生成表及表头
    function columnsConfig(columns){
        var table = document.createElement('table');
        table.width = "100%";
        table.cellPadding="5%";
        table.innerHTML = "<thead style='background-color: #418da4; '><tr class='thead'><th>" + columns[0].text +" </th><th>" + columns[1].text + "</th><th>" + columns[2].text +"</th><th>" + columns[3].text +"</th><th>" + columns[4].text +" </th></tr></thead>";
        document.body.appendChild(table);
    }
    //插入数据
    function dataConfig(data){
        var table = document.getElementsByTagName('table')[0];
        var tbody = document.createElement('tbody');
        table.appendChild(tbody);
        for(var i=0;i<data.length;i++){
            switch (data[i].gender){
                case 1 :
                    data[i].gender = '男';
                    break;
                case 0 :
                    data[i].gender = '女';
                    break;
            }
            var tr = document.createElement('tr');
            tr.className = "dataLine";
            tr.align= 'center';
            tr.innerHTML = "<td>"+data[i].name+"</td><td>"+ data[i].age+"</td><td>"+data[i].subject+"</td><td>"+data[i].grade+"</td><td>"+data[i].gender+"</td>";
            if(i%2==0){
                tr.style.backgroundColor="#fffffd";
            }else{
                tr.style.backgroundColor="#dff0f7";
            }
            tbody.appendChild(tr);
        }
    }
    //设置表格居中
    function setTableCenter(){
        var table = document.getElementsByTagName("table")[0];
        table.align = "center";
    }
    //设置背景色
    function setBgColor(color){
        var table = document.getElementsByTagName("table")[0];
        table.bgColor = color;
    }
    //设置表头背景颜色
    function setTheadBgColor(color){
        var thead = document.getElementsByTagName("thead")[0];
        thead.style.backgroundColor = color;
    }
    //设置表格的宽度
    function setTableWidth(width){
        var table = document.getElementsByTagName("table")[0];
        table.width = width;
    }
    //设置单元格内边距的宽度
    function setCellPadding(width){
        var table = document.getElementsByTagName("table")[0];
        table.cellPadding = width;
    }
    //设置单元格之间的距离
    function setCellSpacing(width){
        var table = document.getElementsByTagName("table")[0];
        table.cellspacing = width;
    }
    //设置表头字体大小
    function setTheadFontSize(size){
        var thead = document.getElementsByTagName("thead")[0];
        thead.style.fontSize = size + 'px';
    }
    //设置数据字体大小
    function setDataFontSize(size){
        var data = document.getElementsByTagName("tbody")[0];
        data.style.fontSize = size + 'px';
    }
    //设置表头文本的对齐方式
    function setTheadTextAlign(align){
        var table = document.getElementsByTagName("thead")[0];
        table.align = align;
    }
    //设置数据文本的对齐方式
    function setDataTextAlign(align){
        var data = document.getElementsByClassName("dataLine");
        for(var i=0;i<data.length;i++)
        {
            data[i].align = align;
        }
    }
    //设置表头文字颜色
    function setTheadColor(color){
        var thead = document.getElementsByTagName("thead")[0];
        thead.style.color = color;
    }
    //设置数据文字颜色
    function setDataColor(color){
        var data = document.getElementsByTagName("tbody")[0];
        data.style.color = color;
    }
    //设置表头的高度
    function setTheadHeight(height){
        var thead = document.getElementsByClassName("thead")[0];
        thead.style.height = height;
    }
    //设置数据行的高度
    function setDataLineHeight(height){
        var dataLine = document.getElementsByClassName("dataLine");
        for(var j=0;j<dataLine.length;j++){
            dataLine[j].style.height = height;
        }
    }
    //设置奇数行背景颜色
    function setOddBgColor(color){

    }
    //设置偶数行背景颜色
    function setEvenBgColor(color){

    }
    //生成表格
    function table(columns,data){
        columnsConfig(columns);
        dataConfig(data);
    }
    return {
        table:table,
        setTableCenter:setTableCenter,
        setBgColor:setBgColor,
        setTheadBgColor:setTheadBgColor,
        setTableWidth:setTableWidth,
        setCellPadding:setCellPadding,
        setCellSpacing:setCellSpacing,
        setOddBgColor:setOddBgColor,
        setEvenBgColor:setEvenBgColor,
        setTheadFontSize:setTheadFontSize,
        setDataFontSize:setDataFontSize,
        setTheadTextAlign:setTheadTextAlign,
        setDataTextAlign:setDataTextAlign,
        setDataColor:setDataColor,
        setTheadColor:setTheadColor,
        setTheadHeight:setTheadHeight,
        setDataLineHeight:setDataLineHeight
    }
})()
