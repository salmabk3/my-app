
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    credentialsId: 'githublogin',
                    url: 'https://github.com/salmabk3/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('salmabk3/my-app:latest')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry(
                        'https://index.docker.io/v1/',
                        'dockerlogin'
                    ) {
                        docker.image('salmabk3/my-app:latest')
                              .push('latest')
                    }
                }
            }
        }
    }
}
