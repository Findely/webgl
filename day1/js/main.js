// 创建场景
var sence =new THREE.Scene();
//创建相机
var camera =new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
//创建渲染节点
var renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor("#FFFFFF");
// document.getElementById('canvas').appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

//创建几何体
var geometry = new THREE.CubeGeometry(2,2,2);
//创建材质
var material = new THREE.MeshBasicMaterial({color:0xff0000});
// 创建网格
var cube = new  THREE.Mesh(geometry,material);
// 场景里面加网格
sence.add(cube);

camera.position.z=5;
function render() {
    requestAnimationFrame(render);
    renderer.render(sence,camera);
    cube.rotation.y +=0.01;
    cube.rotation.x +=0.01;
}

render();
