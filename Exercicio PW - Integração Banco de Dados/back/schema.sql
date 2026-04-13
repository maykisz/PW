-- =========================
-- USUÁRIOS
-- =========================
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    usuario VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (nome, usuario, senha) VALUES
('Carlos Silva', 'carlos.silva', 'pbkdf2_sha256$12345$c4rlo5'),
('Ana Oliveira', 'ana_oliveira88', '$2b$10$yalXnVL8tFYTklJXukJrV.INGW8Tc0cqGrG0PevwDbjwH5E6XkcI6'),
('Bruno Ferreira', 'bferreira_dev', '$2b$10$eSB3O7nWxAEWB0vHiGdyi.rKCHAKGLqkA37axizaAvMEeC9Z7Rtd.'),
('Mariana Souza', 'mari.souza', 'M4riana_Security'),
('Ricardo Lima', 'r.lima_admin', 'Admin*Pass*77')
ON CONFLICT (usuario) DO NOTHING;


-- =========================
-- DEVS
-- =========================
CREATE TABLE IF NOT EXISTS devs (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    funcao VARCHAR(100),
    foto TEXT,
    frase TEXT
);

INSERT INTO devs (nome, funcao, foto, frase) VALUES
('Thiago Mantovani', 'Backend Node.js', 'https://i.pravatar.cc/150?u=thiago', 'Código limpo é liberdade.'),
('Beatriz Luz', 'Frontend React', 'https://i.pravatar.cc/150?u=beatriz', 'UX é tudo.'),
('Lucas Ferreira', 'Data Engineer', 'https://i.pravatar.cc/150?u=lucas', 'Dados contam histórias.'),
('Sofia Alencar', 'Fullstack', 'https://i.pravatar.cc/150?u=sofia', 'Debuggar é viver.'),
('André Souza', 'DevOps', 'https://i.pravatar.cc/150?u=andre', 'Automação é escala.')
ON CONFLICT DO NOTHING;


-- =========================
-- TAREFAS
-- =========================
CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    nome_da_tarefa VARCHAR(255),
    tempo VARCHAR(20),
    relevancia VARCHAR(50),
    status VARCHAR(50)
);

INSERT INTO tarefas (nome_da_tarefa, tempo, relevancia, status) VALUES
('Organizar e-mails', '30 min', 'importante', 'em progresso'),
('Lavar a louça', '15 min', 'pouco importante', 'finalizada'),
('Estudar para prova', '120 min', 'muito importante', 'atrasada'),
('Ir à academia', '60 min', 'importante', 'em progresso'),
('Pagar contas', '20 min', 'muito importante', 'finalizada')
ON CONFLICT DO NOTHING;