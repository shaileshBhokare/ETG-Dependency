//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//|||||||||||||||***************DATATABLE FOR PURCHASE REQUISITION***************************|||||||||||||||||\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

		$(document).ready(function() {
            $('#purchase_requisition').DataTable( {
                dom: 'Brti',
                /* scrollY:        true,
                scrollX:        true,
                scrollCollapse: true,
                paging:         false,
                fixedColumns:   {
                   leftColumns: 2,
                   rightColumns: 1
                }, */
                buttons: [
                    /* { extend: 'copy', text: 'Copy' }, */
                    /* { extend: 'excel', text: 'Excel' },
                    { extend: 'csv', text: 'CSV' }, */
                    /* { extend: 'pdf', text: 'PDF' },
                    {
                        extend: 'print',
                        text: 'Print all'
                    },
                    {
                        extend: 'print',
                        text: 'Print selected',
                        exportOptions: {
                            modifier: {
                                selected: true
                            }
                        }
                    } */
                ],
                select: true
            } );
        } );
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//|||||||||||||||***************DATATABLE FOR SELECT PURCHASE REQUISITION********************|||||||||||||||||\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

				$(document).ready(function() {
		            $('#select_purchase_requisition').DataTable( {
		                dom: 'lfrtip',
		                select: true
		            } );
		        } );
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//|||||||||||||||***************DATATABLE FOR SELECT PURCHASE REQUISITION********************|||||||||||||||||\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

	$(document).ready(function() {
		$('#view_purchase_requisition').DataTable( {
			dom: 'lfrtip',
			select: true
		} );
	} );