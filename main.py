from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/kontakti')
def kontakti():
    return render_template('kontakti.html')

@app.route('/parmums')
def parmums():
    return render_template('parmums.html')

@app.route('/sveiciens')
def sveiciens():
    return render_template('sveiciens.html')

@app.route('/pamati_sintakse')
def pamati_sintakse():
    return render_template('pamati_sintakse.html')

@app.route('/mainigie')
def mainigie():
    vards = "Anna"
    vecums = 20
    vecums2 = vecums + vecums
    return render_template('mainigie.html', vards=vards, vecums=vecums, vecums2=vecums2)

@app.route('/datu_tipi')
def datu_tipi():
    teksts = "Sveika, pasaule!"
    skaitlis = 10
    decimals = 10.5
    saraksts = [1, 2, 3, 4, 5]
    mans_dict = {"vards": "Anna", "vecums": 20}
    mans_kopa = {1, 2, 3, 4, 5}
    return render_template('datu_tipi.html', teksts=teksts, skaitlis=skaitlis,
                           decimals=decimals, saraksts=saraksts, mans_dict=mans_dict,
                           mans_kopa=mans_kopa)

@app.route('/operatori')
def operatori():
    a = 10
    b = 3
    summa = a + b
    starpiba = a - b
    reizinajums = a * b
    dalijums = a / b
    atlikums = a % b
    vienads = (a == b)
    return render_template('operatori.html', summa=summa, starpiba=starpiba,
                           reizinajums=reizinajums, dalijums=dalijums, atlikums=atlikums,
                           vienads=vienads)

@app.route('/kontroles_strukturas')
def kontroles_strukturas():
    x = 4
    if x > 5:
        rezultats = "x ir lielāks par 5"
    else:
        rezultats = "x ir mazāks par 5"
    return render_template('kontroles_strukturas.html', rezultats=rezultats)

@app.route('/aiziet', methods=['POST'])
def aiziet():
    lietotajs = request.form['lietotajvards']
    return f"Paldies, {lietotajs}! Jūsu pieteikums ir saņemts"
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
