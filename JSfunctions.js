$(document).ready(function() {
	$(document).on('change', '.category', function() {
	var category=this.value;
	var id=$(this).attr('id');
	var idnew ="";
	if(id=="category"){
		idnew="";
    }else{
    	idnew = id.replace('category','');
    }
//	alert(id);
            $.post(
                    "loadname.jsp",
                    {
                    	category:category
                    }
                    ,
                    function(data) {
                        data.trim();
//                        alert(data);
                        $("#itemname"+idnew).html(data);
                    }
                    );
        }
        );
	});


$(document).ready(function() {
	$(document).on('change', '.itemname', function() {
	var itemname=this.value;
	//alert(itemname);
	var id=$(this).attr('id');
//	alert(id);
	var idnew = id.replace('itemname','');
	var category = document.getElementById("category"+idnew).value;
//	alert(category);
    $.post(
        "loaduom.jsp",
        {
        	itemname:itemname,
        }
        ,
        function(data2) {
            data2.trim();
//            alert(data1);
            $("#uom"+idnew).attr({  
                'value' : data2
            });
        }
        );
    $.post(
            "loadhsn_code.jsp",
            {
            	category:category,
            	itemname:itemname
            }
            ,
            function(data1) {
                data1.trim();
//                alert(data1);
                $("#hsn_code"+idnew).attr({  
                    'value' : data1,
                    'name' : "hsn_code"
                });
            }
            );
    	$.post(
            "loadcode.jsp",
            {
            	category:category,
            	itemname:itemname
            }
            ,
            function(data) {
                data.trim();
//                alert(data);
                $("#itemcode"+idnew).attr({  
                    'value' : data,
                    'name' : "itemcode"
           });
         });
	});
});

$(document).ready(function() {
	$(document).on('change', '.Company', function() {
	var Company=this.value;
            $.post(
                    "loadcomadd.jsp",
                    {
                    	Company:Company
                    }
                    ,
                    function(data) {
                        data.trim();
//                        alert(data);
                        $("#loadaddress").html(data);
                    }
                    );
        }
     );
});