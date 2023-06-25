pipeline {
  agent any
  stages {
    stage('Git') {
      steps {
        git(url: 'https://github.com/uekichinos/tus.float', branch: 'main')
        sh 'echo "Done"'
      }
    }

  }
}