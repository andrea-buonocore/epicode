console.log('collegato!');


const COWS_URL = 'https://api.pexels.com/v1/search?query=cows';
const MY_API = '0yc9WyPYNpgE7O07KqRolyTUSF1l6CV0j6Wbg2QHNE79ulr8093q3EQ9'


const createCards = (obtainedPhotos) => {
    console.log('foto ricevute: ', obtainedPhotos);
    console.log('foto trovate: ', obtainedPhotos.photos.length);
    

    // obtainedPhotos.photos.forEach((photo, i) => {
    //     let col = document.createElement('div');
    //     col.classList.add('col-md-4');
    //     col.setAttribute('id',i);
    //     col.innerHTML = `<div class="col-md-4">
    //         <div class="card mb-4 shadow-sm">
    //             <img src='${photo.url}' class="card-img-top">
    //         <div class="card-body">
    //           <h5 class="card-title">Lorem Ipsum</h5>
    //             <p class="card-text">
    //               This is a wider card with supporting text below as a natural
    //               lead-in to additional content. This content is a little bit
    //               longer.
    //             </p>
    //             <div class="d-flex justify-content-between align-items-center">
    //               <div class="btn-group">
    //                 <button type="button" class="btn btn-sm btn-outline-secondary">
    //                   View
    //                 </button>
    //                 <button type="button" class="btn btn-sm btn-outline-secondary">
    //                   Edit
    //                 </button>
    //               </div>
    //               <small class="text-muted">9 mins</small>
    //             </div>
    //           </div>
    //         </div>
    //       </div>`;

    // });

}

const getImages = async function () {

    try {

        let response = await fetch(COWS_URL, {
            method: "GET",
            headers: {
                Authorization: MY_API,
            }
        });

        if (response.ok) {
            console.log('funziona')
            let obtainedPhotos = await response.json();
            console.log('risultato: ', obtainedPhotos);
            document.querySelector('.row').remove();
            console.log('sta funzionando');
        } else {
            return new Error("Problema nel recuperare i dettagli dell'evento");
        }

    }
    catch (error) {
        console.log(error);
    }

}




