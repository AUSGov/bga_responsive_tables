/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function () {

    // ----- Show / hide cells in Reveal table ----- 
    
    $('tr td:first-of-type').on('click', function(){
        
        //toggle class to show / hide child <td>
        var parent = $( this ).parent().get( 0 );
        $(parent).children('td').toggleClass('showGroup');
        
        //toggle class on parent
        $(parent).toggleClass('groupParent');
        
    });
    
    
    // ----- Detect tables with less than 2 columns ----- 
    /*var col_count = $( ".table tr:nth-child(1) td" ).length;
    
    if(col_count <= 2) {
        $('table').addClass('col-2-table');
    }*/
    
});

