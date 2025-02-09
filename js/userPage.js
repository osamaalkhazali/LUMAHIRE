const userCard = document.querySelector(".user-card");
const userData = JSON.parse(localStorage.getItem('user'))
const historyList = document.querySelector(".history-list");
const history = userData.history
let jobs = []


fetch('../server/data.json')
  .then(response => response.json())
  .then(data => {
    jobs = data
    if (history.length === 0) {
      historyList.innerHTML = '<h5 class="text-center">You have not applied for any jobs yet.</h5>';
    }
    history.forEach((jobId) => {
      const job = jobs.find((job) => job.id === jobId);
      historyList.innerHTML += `
                              <!-- Applied Job Card -->
                              <div class="history-item">
                                <div class="row">
                                  <div class="col-md-2 text-center">
                                    <img src="${job.imageSrc}" alt="Company Logo" class=" rounded-circle p-2 border"
                                      style="width: 80px; aspect-ratio:1/1; object-fit: cover" />
                                  </div>
                                  <div class="col-md-8">
                                    <h5>Applied for ${job.title}</h5>
                                    <p class="company mb-1">Company: ${job.company}</p>
                                    <p class="date mb-1">Date: ${job.applicationDeadline}</p>
                                    <p class="status mb-0">Status: Under Review</p>
                                  </div>
                                  <div class="col-md-2 text-center text-md-center">
                                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#jobDetailsModal" >View Details</button>
                                  </div>
                                </div>
                              </div>

                              <!-- Job Details Modal -->
                              <div class="modal fade" id="jobDetailsModal" tabindex="-1" aria-labelledby="jobDetailsModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="jobDetailsModalLabel">Job Details</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="jobDetailsContent">
                                      <!-- Job details will be injected here dynamically -->
                                      <div class="job-item">
                              <div class="row align-items-center gy-3">
                                <!-- Logo Column -->
                                <div class="col-md-2 text-center text-md-center">
                                  <img class="img-fluid border rounded-circle p-2" loading="lazy" src="${job.imageSrc}" 
                                      alt="Company Logo" style="width: 120px; aspect-ratio:1/1; object-fit: cover;">
                                </div>
                                <!-- Job Details Column -->
                                <div class="col-md-6 text-center text-md-start">
                                <h2 class="mb-3">${job.title}</h2>
                                <!-- Details in one line on large screens -->
                                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start mb-3">
                                  <span class="me-3"><i class="fa fa-building me-1"></i><strong>${job.company}</strong></span>
                                  <span class="me-3"><i class="fa fa-map-marker-alt me-1"></i>${job.country}</span>
                                  <span class="me-3"><i class="far fa-clock me-1"></i>${job.employmentType}</span>
                                  <span class="me-3"><i class="far fa-money-bill-alt me-1"></i>$${job.salary}</span>
                                  <span class="me-3"><i class="fa fa-home me-1"></i>${job.remote}</span>
                                  <span class="me-3"><i class="fas fa-level-up-alt me-1"></i>${job.level}</span>
                                  <span class="me-3"><i class="fa fa-tags me-1"></i>${job.category}</span>
                                </div>
                                <!-- Job Description -->
                                <p class="mt-2">${job.description}</p>
                                <!-- Skills -->
                                <div class="mt-2">
                                  <span><i class="fas fa-tools me-1"></i><strong>Skills:</strong></span>
                                  <span class="badge bg-light text-dark me-1 border">${job.skills.join('</span><span class="badge bg-light text-dark me-1 border">')}</span>
                                </div>
                                <!-- Benefits -->
                                <div class="mt-2">
                                  <span><i class="fas fa-gift me-1"></i><strong>Benefits:</strong></span>
                                  <span class="badge bg-light text-dark me-1 border">${job.benefits.join('</span><span class="badge bg-light text-dark me-1 border">')}</span>
                                </div>
                              </div>
                              <!-- Action Column -->
                              <div class="col-md-4 text-center text-md-center">
                                <div class="d-flex mb-3 justify-content-center justify-content-md-end">
                                  <!-- Save Job Button -->
                                  <a class="btn love btn-light btn-sm me-2" title="Save Job" >
                                    <i class="far fa-heart"></i>
                                  </a>
                                </div>
                                <!-- Application Deadline -->
                                <small><i class="far fa-calendar-alt me-1"></i>Deadline: ${job.applicationDeadline}</small>
                              </div>
                            </div>
                          </div>
                                      <!-- Job details will be injected here dynamically -->
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
      `
    })
  })
  
  
  
  

userCard.innerHTML = 
`
<div class="text-center">
            <!-- User Avatar -->
            <img
              src="https://dummyimage.com/150x150/0e2f4e/4793c7?text=${userData.name}"
              alt="User Avatar"
              class="img-fluid rounded-circle p-2 border"
              style="width: 150px; aspect-ratio:1/1 ; object-fit: cover"
            />
            <!-- User Details -->
            <h2 class="mt-3 mb-2">${userData.name}</h2>
            <p class="details mb-3">
              <span class="fw-bold">Phone:</span> ${userData.phone} <br />
              <span class="fw-bold">Email:</span> ${userData.email} <br />
              <span class="fw-bold">Age:</span> ${userData.age}
            </p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" title="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="#" title="Portfolio"><i class="fa-solid fa-globe"></i></a>
            </div>
          </div>
`

