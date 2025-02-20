import sqlite3


# Conectar ao banco
con = sqlite3.connect("meubanco.db")
cursor = con.cursor()

# Criar tabela
cursor.execute('''
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        centro INTEGER,
        deposito INTEGER,
        posicao INTEGER,
        material INTEGER,
        descricao TEXT NOT NULL,
        quantidade INTEGER,
        ultimo_movimento INTEGER,
        data_entrada INTEGER
    )
''')

# Inserir dados
cursor.execute("INSERT INTO usuarios (descricao, quantidade) VALUES (?, ?)", ("Gustavo", 19))
cursor.execute("INSERT INTO usuarios (descricao, quantidade) VALUES (?, ?)", ("Bob", 30))
con.commit()

# Ler dados
cursor.execute("SELECT * FROM usuarios")
usuarios = cursor.fetchall()
for usuario in usuarios:
    print(usuario)

# Atualizar dados
cursor.execute("UPDATE usuarios SET quantidade = ? WHERE descricao = ?", (20, "Gustavo"))
con.commit()

# Deletar dados
cursor.execute("DELETE FROM usuarios WHERE descricao = ?", ("Bob",))
con.commit()

# Fechar conexão
con.close()
