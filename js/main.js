        // setup scene
        var scene = new THREE.Scene();

        // setup Camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // setup renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        
        // window resize event
        window.addEventListener('resize', function(){
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });


        // Contorl
        var contorl = new THREE.OrbitControls(camera, renderer.domElement);

        // create shape
        var geometry = new THREE.BoxGeometry(1,1,1);
        var cubeMaterials = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide}), //Right Side
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide}), // Left side
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/3.png'), side: THREE.DoubleSide}), // top side
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide}), // bottom side
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/5.png'), side: THREE.DoubleSide}), // front side
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide}), // back side
        ];
        
        // create material, color, image texture
        // var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe:false});
        var material = new THREE.MeshFaceMaterial(cubeMaterials);
        var cube = new THREE.Mesh(geometry,material);
        scene.add(cube);

        camera.position.z = 3;

        // update [game lagic]
        var update = function(){
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;
        };

        // render
        var render = function(){
            renderer.render(scene, camera);
        }

        // gmae Loop [update, render, repeat]
        var GameLoop = function(){
            requestAnimationFrame(GameLoop);

            update();
            render();
        }

        GameLoop();