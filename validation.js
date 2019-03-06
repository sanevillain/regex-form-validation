// validation script here

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    const attribute = e.target.attributes.name.value;
    
    validate(e.target, attribute);
  });
});

const patterns = (function() {
  const username = /^[a-z\d]{5,12}$/;
  const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const password = /^[\w@-]{8,20}$/;
  const telephone = /^\d{11}$/;
  const slug = /^[a-z\d-]{8,20}$/;

  return { username, email, password, telephone, slug };
} ());

function validate(target, attribute) {
  const regex = patterns[attribute];
  const value = target.value;

  if (regex.test(value, regex)) {
    target.classList.remove("invalid");
    target.classList.add("valid");
  } else if (value) {
    target.classList.remove("valid");
    target.classList.add("invalid");
  } else {
    target.classList.remove('invalid');
  }
}
