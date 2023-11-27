# Node.js, express 기초

# Node.js 시작하기

먼저 시작에 앞서 **Node.js** 는 **자바스크립트 기반**의 오픈소스 **서버 프레임워크**이다.

**자바스크립트 런타임**으로 백엔드 서버 애플리케이션을 빌드하는데 사용한다.

## 설치

Apt Package Manager, PPA, NVM을 이용한 방법 중 NVM을 이용하여 Node.js 를 설치해 보았다.

**NVM**은 노드 버전 매니저로 다양한 버전의 node.js를 설치 및 관리하는 기능을 제공한다.

**NPM**은 노드 패키지 매니저로 Node.js의 패키지를 관리하는 기능을 제공한다.

1. nvm 스크립트 설치
    
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    ```
    
2. nvm 스크립트 사용 적용
    
    ```bash
    source ~/.bashrc
    ```
    
3. node version 확인
    
    ```bash
    nvm list-remote
    ```
    
4. 최신버전중 LTS 버전인 20.10.0 설치
    
    ```bash
    nvm install v20.10.0
    ```
    
5. npm 최신화
    
    ```bash
    npm install -g npm@latest
    ```
    
    # Express.js 시작하기
    
    **Express.js**는 Node.js를 위한 빠르고 간편한 **웹 프레임워크**이며 **Node.js**의 핵심 모듈 **HTTP**와 **Connect** 컴포넌트를 기반으로 함 이는 **미들웨어** 구조 때문에 가능함
    
    **미들웨어 함수란?**
    
    **request, response** 그리고 어플리케이션 **요청-응답 사이클** 도중 **그 다음의 미들웨어 함수**에 대한 **엑세스 권한**을 갖는 함수
    
    → 쉽게 말해 클라이언트에게 요청이 오면 그 요청에 대한 응답하려는 중간에 목적에 맞게 처리하는 즉 거쳐가는 함수들
    
    ## 설치
    
    ```bash
    npm install express --save
    ```
    
    # Nodemon
    
    Node.js 개발 시 자바 스크립트 파일을 수정할 때마다 node를 재시작 해줘야하는 번거로움을 막기 위하여 사용하는 **스크립트 모니터링 유틸리티**
    
    ```bash
    npm install nodemon -g
    ```
    
    # 프로젝트 시작
    
    1. 먼저 프로젝트를 초기화한다.
        
        ```bash
        npm init # -y 옵션으로 default 로 줄 수 있음
        ```
        
    2. Express.js 를 설치한다.
        
        ```bash
        npm install --save express
        ```
        
    3. Nodemon 사용을 위해 package.json에 nodemon을 추가한다.
    (docker에서 쓸 경우 Legacy 옵션 추가) -L “ 찾느라 개고생”
        
        ```json
        "scripts": {
            "start": "nodemon -L src/index.js"
          },
        ```
        
    4. 시작
        
        ```bash
        npm start
        # 또는
        npm run dev # 개발모드
        ```