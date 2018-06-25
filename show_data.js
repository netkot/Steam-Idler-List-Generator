var badges_arr = $('.badge_row.is_link');
var all_commands = '';
var result = '';

$.each (badges_arr, function ()
    {
    var nx_badge_progress_text = $(this).find('.progress_info_bold').text();

    if ((nx_badge_progress_text.length > 1) && (nx_badge_progress_text != 'No card drops remaining'))
        {
        var nx_link = $(this).find('a.badge_row_overlay').prop('href');
        if (nx_link.indexOf('gamecards') > 0)
            {
            var nx_id = nx_link.replace(/.*\/(\d+)\/$/g,'$1');
            
            nx_id = nx_id.replace ('/','');
            var nx_command = "start steam-idle.exe " + nx_id + "\n";
            all_commands += nx_command;
            }
        }
    });

if (all_commands.length > 1)
    {
    result = all_commands.trim();
    }
else
    {
    result = "No data found";
    }

$('body').prepend ("<div style='background: #fff; padding: 20px; position: absolute; top: 10px; left: 10px; z-index: 9999 !important;'><textarea id=idle_list_to_command style='width: 300px; height: 300px; font-size: 12px;'>" + result + "</textarea></div>");
