        // setup scene
        var scene = new THREE.Scene();

        // setup Camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // setup renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        

        camera.position.z = 3;

        // update [game lagic]
        var update = function(){
           
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