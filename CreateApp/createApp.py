import os
import shutil
import sys
import getopt


def CreateApp():

    if len(sys.argv) == 0:
        print('Unknown Project name!')
        return

    os.system('react-native init ' + sys.argv[1])
    projectPath = os.path.join(os.getcwd(), sys.argv[1])
    os.chdir(projectPath)
    os.system('npm i -S react-native-i18n')
    os.system('npm i -S react-native-splash-screen')
    os.system('npm i -S redux')
    os.system('npm i -S react-redux')
    os.system('npm i -S redux-thunk')
    os.system('npm i -S react-navigation')
    os.system('npm i -S react-native-gesture-handler')
    os.system('npm i -D babel-plugin-module-resolver')
    os.system('npm i -D eslint')
    os.system('npm i -D eslint-plugin-react')
    os.system('npm i -D eslint-plugin-react-native')
    os.system('npm i -D eslint babel-eslint')
    os.system('react-native link')
    cpFileBasePath = os.path.join(sys.path[0], 'Files/.')
    os.system('cp -a '+cpFileBasePath+' '+projectPath)


if __name__ == "__main__":
    CreateApp()
    pass
