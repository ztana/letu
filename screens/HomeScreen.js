import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    const html = `
      <html>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="http://18.162.239.149/resources/runable/css/w3-theme-teal.css">
      <link rel="stylesheet" href="http://18.162.239.149/resources/runable/css/w3pro.css">
      <head>
        <style>
        .center {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto;
          margin-top: auto;
          width: 50%;
          }
        #robot {
          margin-bottom: 30;
        }
        input {
          margin-top:10;
        }

        lable {
          color: red;
          font-weight: bold;
        }

        </style>
      </head>
      <body>

        <div id="tg">&nbsp</div>
        <div id="robot" >
        <div id="t" hidden>aaa</div>
        <img class="center" src="data:image/png;base64,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" >&nbsp</div>


        <div class="form__group field w3-auto center">
          <input type="input" class="form__field" placeholder="Name" name="name" id='name' required/>
          <input type="input" class="form__field" placeholder="Password" name="Password" id='password' required/>
          <input type="button" value="Submit" class="form__field" onclick="gk()"></input>
        </div>
        <br /><br />
        <div class="center" disable>
          输入用户名密码后点击 ’Submit’。将在下面生成ID，复制到ScratchX中。
          <br /><br />
          <lable id="result" color="red"></label>
        </div>
        <script>



        function start(id) {
          var url = 'http://napi.letufun.com/profile?orem='+id+'&op=get&v=0';
          setInterval(function(){
            fetch(url)
            .then((response) => response.json())
            .then((data) => {

              document.getElementById("t").innerHTML = data;
              if(data == 0) {
                document.getElementById("tg").style.backgroundColor = "green";
                document.getElementById("robot").style.backgroundColor = "green";
              } else {
                document.getElementById("tg").style.backgroundColor = "red";
                document.getElementById("robot").style.backgroundColor = "red";
              }
            })
            .catch((error) => {
              console.log('Success:', data);
            });

          }, 1500);
        }

        function gk() {

          var name = document.getElementById('name').value;
          var pass = document.getElementById('password').value;
          var id =  (window.btoa(name+pass));
          document.getElementById('result').innerHTML =id;
          start(id);

        }

        </script>
      </body>
      </html>
    `;

    return (



      <View style={ styles.container}>

        <WebView
          source={{ html }}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

});

