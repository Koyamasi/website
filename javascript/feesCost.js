var appartments_number = document.getElementById('appartNo');
var total_costs = document.getElementById('totCosts');
var result_field = document.getElementById('result_field');
var form = document.getElementById('readData');

form.addEventListener('submit', function(event){
   if(!appartments_number.value && !total_costs.value)
        {
            alert("Παρακαλώ συμπληρώστε τα πεδία.");
            event.preventDefault();
        }
    else if(!appartments_number.value)
        {
            alert("Παρακαλώ εισάγετε αριθμό διαμερισμάτων.");
            event.preventDefault();
        }
    else if (!total_costs.value)
        {
            alert("Παρακαλώ εισάγετε ενδεικτικά έξοδα πολυκατοικίας.");
            event.preventDefault();
        }
    else
        {
            var no = parseFloat(appartments_number.value);
            var cost = parseFloat(total_costs.value);
            var calc = cost*0.01/no + "$";
            result_field.innerText = calc;
            event.preventDefault();
        }
                      });