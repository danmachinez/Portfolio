from flask import Flask, render_template, request, redirect
from flask_mail import Message, Mail

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'machdan.projetos@gmail.com',
    "MAIL_PASSWORD": 'projetodan'
}


app.config.update(mail_settings)
mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem
        

@app.route("/")
def index():
    return render_template('index.html')


@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
        
        msg = Message(
            subject = 'Contato do seu Portfólio',
            sender=app.config.get('MAIL_USERNAME'),
            recipients=[app.config.get('MAIL_USERNAME')],
            body=f'''O {formContato.nome} com o email {formContato.email}, te mandou a seguinte mensagem:
            
            {formContato.mensagem}'''
        )
        mail.send(msg)
    return render_template('index.html', formContato=formContato)

if __name__ == '__main__':
    app.run(debug=True)