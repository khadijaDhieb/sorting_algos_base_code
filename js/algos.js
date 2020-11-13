// Converts from degrees to radians.
Number.prototype.toRadians = function () {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  console.log("distanceFromGrenoble - implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  const R = 6371e3; // metres
  const φ1 = GrenobleLat * Math.PI / 180; // φ, λ in radians
  const φ2 = city.latitude * Math.PI / 180;
  const Δφ = (city.latitude - GrenobleLat) * Math.PI / 180;
  const Δλ = (city.longitude - GrenobleLong) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = (R * c) / 1000; // in klm

  return d;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  console.log("swap - implement me !");
  let tmp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = tmp;
  // [csvData[i], csvData[j]] = [csvData[j], csvData[i]]
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  console.log("isLess - implement me !");
  // if (csvData[i].dist < csvData[j].dist){
  //   return true ;
  // }
  // return false;
  return (csvData[i].dist < csvData[j].dist);
}


function insertsort() {
  console.log("insertsort - implement me !");

  for (let i = 1; i < csvData.length; i++) {
    for (let k = i; k > 0 && isLess(k, k - 1); k--) {
      swap(k, k - 1);
    }
  }

}

function selectionsort() {
  console.log("selectionsort - implement me !");
  for (let i = 0; i < csvData.length; i++) {
    let min = i;
    for (let j = i + 1; j < csvData.length; j++) {
      if (isLess(j, min)) {
        min = j;
      }
    }
    swap(i, min);
  }
}

function bubblesort() {
  console.log("bubblesort - implement me !");
  let passage = 0;
  let permut = true;
  do {
    permut = false;
    for (i = 0; i < (csvData.length - 1 - passage); i++) {
      if (!isLess(i, i + 1)) {
        swap(i, i + 1);
        permut = true;
      }
    }
    passage++;
  } while (permut)
}

function shellsort() {
  console.log("shellsort - implement me !");
}

function mergesort() {
  console.log("mergesort - implement me !");
}

function heapsort() {
  console.log("heapsort - implement me !");
}

function quicksort() {
  console.log("quicksort - implement me !");
  csvData = R_quicksort(csvData);
  console.log(csvData);
}

function R_quicksort(tab) {

  if (tab.length < 2) {
    return tab
  };

  let lefttab = [];
  let righttab = [];
  let pivot = tab[tab.length-1];

  for (let i = 0; i < tab.length -1; i++) {
    if (tab[i].dist <= pivot.dist) {
      lefttab.push(tab[i]);
    } else {
      righttab.push(tab[i]);
    }
  }
  if(lefttab.length> 0 && righttab.length >0){
     return [...R_quicksort(lefttab), pivot, ...R_quicksort(righttab)];
  }else if (lefttab.length > 0){
    return [...R_quicksort(lefttab), pivot];
  }else {
    return [ pivot, ...R_quicksort(righttab)];
  }
 
}

function quick3sort() {
  console.log("quick3sort - implement me !");
}


function sort(algo) {
  switch (algo) {
    case 'insert': insertsort(); break;
    case 'select': selectionsort(); break;
    case 'bubble': bubblesort(); break;
    case 'shell': shellsort(); break;
    case 'merge': mergesort(); break;
    case 'heap': heapsort(); break;
    case 'quick': quicksort(); break;
    case 'quick3': quick3sort(); break;
    default: throw 'Invalid algorithm ' + algo;
  }
}





 // let mur, pivot, courant;
  // if (taille < 2) return;
  // console.log(taille)
  // pivot = tab[taille-1].dist;
  // mur = courant = 0;
  // while (courant < taille) {
  //   if(tab[courant].dist <= pivot){
  //     if (mur != courant){
  //       swap(mur, courant);
  //     }
  //     mur++ ; 
  //   }
  //   courant++ ;
  // }
  // quicksort_recursive(tab, mur - 1);
  // quicksort_recursive(tab + mur - 1, taille - mur + 1);