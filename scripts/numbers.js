

function Clear() {
        var myNode = document.getElementsByTagName('main')[0];
        myNode.innerHTML = '';
}
function Generate() {
        var StartingValue = parseInt(document.getElementById('StartingValue').value);
        var EndingValue = parseInt(document.getElementById('EndingValue').value);
        var FizzValue = parseInt(document.getElementById('FizzValue').value);
        var BuzzValue = parseInt(document.getElementById('BuzzValue').value);

        for (var i = StartingValue; i <= EndingValue; i++) {
                var iDiv = document.createElement('div');
                iDiv.id = 'myid' + i;
                if (i % 3 == 0 && i % 5 == 0) {
                        iDiv.className = 'ONE';
                        iDiv.innerHTML = 'FizzBuzz';
                } else if (i % 3 == 0) {
                        iDiv.className = 'TWO';
                        iDiv.innerHTML = 'Fizz';
                } else if (i % 5 == 0) {
                        iDiv.className = 'THREE';
                        iDiv.innerHTML = 'Buzz';
                } else {
                        iDiv.className = 'FOUR';
                        iDiv.innerHTML = 'i';
                }
                document.getElementsByTagName('main')[0].appendChild(iDiv);
        }
}
