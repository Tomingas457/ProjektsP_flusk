from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/par_mums') #ja tiks rakstīts mana mājaslapa/par_mums tad atvēries parmums html lapa

def par_mums():
    return render_template('par_mums.html') 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
