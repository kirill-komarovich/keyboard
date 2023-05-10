function switch_plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[45.8441082,-15.2062716],[-7.6655821,-3.0311527]]).appendArc([-10,-0.1059176],{"radius":3,"clockwise":true,"large":false}).appendPoint([-10,48.3234251]).appendArc([-7.9308523,51.1753567],{"radius":3,"clockwise":true,"large":false}).appendPoint([31.7305897,64.1206001]).appendArc([32.8707115,64.2613606],{"radius":3,"clockwise":true,"large":false}).appendPoint([50.0294312,63.061506]).appendArc([50.4524282,63.0014303],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.3426098,50.5204198]).appendArc([110.6951774,47.2865306],{"radius":3,"clockwise":true,"large":false}).appendPoint([105.828289,-0.9317442]).appendArc([106.8497056,-3.5012745],{"radius":3,"clockwise":false,"large":false}).appendPoint([116.1274506,-11.532148]).appendArc([116.42862,-15.7680553],{"radius":3,"clockwise":true,"large":false}).appendPoint([93.4808071,-42.1789116]).appendArc([89.3406094,-42.5526468],{"radius":3,"clockwise":true,"large":false}).appendPoint([77.9259145,-33.4086901]).appendArc([77.5372923,-33.14453],{"radius":3,"clockwise":false,"large":false}).appendPoint([46.6655146,-15.5259616]).appendArc([45.8441083,-15.2062716],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.2950053,-19.639947],[80.2580462,-30.7871193]]).appendPoint([91.4052185,-40.8240784]).appendPoint([101.4421776,-29.6769061]).appendPoint([90.2950053,-19.639947]).close().innerToCAG()
.union(
    new CSG.Path2D([[31.5998431,47.3087161],[46.5633038,46.262369]]).appendPoint([47.6096509,61.2258297]).appendPoint([32.6461902,62.2721768]).appendPoint([31.5998431,47.3087161]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.2281229,13.3915383],[44.1915836,12.3451912]]).appendPoint([45.2379307,27.3086519]).appendPoint([30.27447,28.354999]).appendPoint([29.2281229,13.3915383]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.413983,30.3501272],[45.3774437,29.3037801]]).appendPoint([46.4237908,44.2672408]).appendPoint([31.4603301,45.3135879]).appendPoint([30.413983,30.3501272]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.9094115,37.2816691],[83.8272399,35.7137421]]).appendPoint([85.3951669,50.6315705]).appendPoint([70.4773385,52.1994975]).appendPoint([68.9094115,37.2816691]).close().innerToCAG()
).union(
    new CSG.Path2D([[67.1324276,20.3747969],[82.050256,18.8068699]]).appendPoint([83.618183,33.7246983]).appendPoint([68.7003546,35.2926253]).appendPoint([67.1324276,20.3747969]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.3554437,3.4679247],[80.2732721,1.8999977]]).appendPoint([81.8411991,16.8178261]).appendPoint([66.9233707,18.3857531]).appendPoint([65.3554437,3.4679247]).close().innerToCAG()
).union(
    new CSG.Path2D([[48.7337726,22.3085735],[63.651601,20.7406465]]).appendPoint([65.219528,35.6584749]).appendPoint([50.3016996,37.2264019]).appendPoint([48.7337726,22.3085735]).close().innerToCAG()
).union(
    new CSG.Path2D([[50.5107565,39.2154457],[65.4285849,37.6475187]]).appendPoint([66.9965119,52.5653471]).appendPoint([52.0786835,54.1332741]).appendPoint([50.5107565,39.2154457]).close().innerToCAG()
).union(
    new CSG.Path2D([[46.9567887,5.4017013],[61.8746171,3.8337743]]).appendPoint([63.4425441,18.7516027]).appendPoint([48.5247157,20.3195297]).appendPoint([46.9567887,5.4017013]).close().innerToCAG()
).union(
    new CSG.Path2D([[85.8686973,5.3340037],[78.1431262,-7.5235058]]).appendPoint([91.0006357,-15.2490769]).appendPoint([98.7262068,-2.3915674]).appendPoint([85.8686973,5.3340037]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.336114,23.7559591],[26.3269764,23.2324667]]).appendPoint([26.8504688,38.2233291]).appendPoint([11.8596064,38.7468215]).appendPoint([11.336114,23.7559591]).close().innerToCAG()
).union(
    new CSG.Path2D([[10.7428226,6.766315],[25.733685,6.2428226]]).appendPoint([26.2571774,21.233685]).appendPoint([11.266315,21.7571774]).appendPoint([10.7428226,6.766315]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.9294054,40.7456032],[26.9202678,40.2221108]]).appendPoint([27.4437602,55.2129732]).appendPoint([12.4528978,55.7364656]).appendPoint([11.9294054,40.7456032]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,33.5],[7.5,33.5]]).appendPoint([7.5,48.5]).appendPoint([-7.5,48.5]).appendPoint([-7.5,33.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,16.5],[7.5,16.5]]).appendPoint([7.5,31.5]).appendPoint([-7.5,31.5]).appendPoint([-7.5,16.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.5,-0.5],[7.5,-0.5]]).appendPoint([7.5,14.5]).appendPoint([-7.5,14.5]).appendPoint([-7.5,-0.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[73.853982,-9.175385],[65.2503355,-21.4626657]]).appendPoint([77.5376162,-30.0663122]).appendPoint([86.1412627,-17.7790315]).appendPoint([73.853982,-9.175385]).close().innerToCAG()
).union(
    new CSG.Path2D([[56.2601984,-0.792481],[49.2181249,-14.0366949]]).appendPoint([62.4623388,-21.0787684]).appendPoint([69.5044123,-7.8345545]).appendPoint([56.2601984,-0.792481]).close().innerToCAG()
).union(
    new CSG.Path2D([[103.5523825,-3.9049764],[93.711497,-15.2256201]]).appendPoint([105.0321407,-25.0665056]).appendPoint([114.8730262,-13.7458619]).appendPoint([103.5523825,-3.9049764]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switch_plate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        