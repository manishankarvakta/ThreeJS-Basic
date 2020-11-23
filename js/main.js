        // setup scene
        var scene = new THREE.Scene();

        // setup Camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // setup renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // create shape
        var geometry = new THREE.BoxGeometry(1,1,1);
        
        // create material, color, image texture
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe:false});
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