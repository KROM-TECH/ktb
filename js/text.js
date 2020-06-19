M.AutoInit()
modeCheck()
  
let upl = document.querySelector('.custom-upload__input')
      upl.addEventListener('change', evt=>{
    let input = evt.currentTarget.value.split('\\').pop()
        console.log(input)
        document.getElementById("custom-upload-button").innerHTML = input

      })


  function formatDoc(sCmd, sValue) {
      document.execCommand(sCmd, false, sValue);
  }

  document.querySelector('textarea').focus()
  document.querySelector('#mode').addEventListener('change', function () {
    const modeCheck = document.querySelector('#mode').checked
    if (modeCheck) {
      document.querySelector('#text').style.display = 'none'
      document.querySelector('#audio').style.display = 'block'
    } else {
      document.querySelector('#text').style.display = 'block'
      document.querySelector('#audio').style.display = 'none'
    }
  })
  // listen to the toggle event to activate anonymousity or not
  document.querySelector('#anon').addEventListener('change', function () {
    const modeCheck = document.querySelector('#anon').checked
    if (modeCheck) {
      document.querySelector('#name').disabled = true

    } else {
      document.querySelector('#name').disabled = false
    }
  })

  function modeCheck() {
    const modeCheck = document.querySelector('#mode').checked
    document.querySelector('#textView').innerHTML = 'Nothing to Preview yet'
    if (modeCheck) {
      document.querySelector('#text').style.display = 'none'
      document.querySelector('#audio').style.display = 'block'
    } else {
      document.querySelector('#text').style.display = 'block'
      document.querySelector('#audio').style.display = 'none'
    }
  }


  document.querySelector('#textBox').addEventListener('keyup', function(){
      document.querySelector('#textView').innerHTML = document.querySelector('#textBox').innerHTML

           if (document.querySelector('#textView').innerText == '') {
      document.querySelector('#textView').innerHTML = 'Nothing to Preview yet'
    }

  })
