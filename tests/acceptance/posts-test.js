import { module, test } from "qunit";
import { visit, currentURL, find, findAll, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | posts", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /posts", async function(assert) {
    await visit("/posts");
    assert.equal(currentURL(), "/posts");
  });

  test("posts title renders", async function(assert) {
    await visit("/posts");
    assert.equal(find("[data-test-title]").textContent, "Posts");
  });

  /* Mirage CLI data pulled here */
  test("Posts are displayed", async function(assert) {
    await visit("/posts");
    assert.equal(findAll("[data-test-post-container]").length, 5);
  });

  test("Posts change when clicking next", async function(assert) {
    await visit("/posts");
    let firstPost = find("[data-test-post-container]").textContent;
    await click(find("[data-test-next-button]"));
    let secondPost = find("[data-test-post-container]").textContent;
    assert.notEqual(firstPost, secondPost);
  });

  test("Posts change when clicking back", async function(assert) {
    await visit("/posts");
    let firstPost = find("[data-test-post-container]").textContent;

    await click(find("[data-test-next-button]"));
    await click(find("[data-test-prev-button]"));

    let secondPost = find("[data-test-post-container]").textContent;
    assert.equal(firstPost, secondPost);
  });

  test("Side Panel shows post clicked", async function(assert) {
    await visit("/posts");

    /* Get random post */
    let post = findAll("[data-test-post-action-container]")[
      Math.floor(Math.random() * Math.floor(5))
    ];
    await click(post);

    let sidePanelPostTitle = find(
      "[data-test-side-panel-title]"
    ).textContent.trim();
    assert.equal(post.textContent.trim(), sidePanelPostTitle);
  });

  test("Side Panel shows user", async function(assert) {
    await visit("/posts");

    let post = findAll("[data-test-post-action-container]")[
      Math.floor(Math.random() * Math.floor(5))
    ];
    await click(post);

    let userTitle = find("[data-test-side-panel-user]").textContent.trim();
    assert.equal(userTitle, "Written by: @Bret");
  });

  test("Side Panel closes", async function(assert) {
    await visit("/posts");

    let post = findAll("[data-test-post-action-container]")[
      Math.floor(Math.random() * Math.floor(5))
    ];
    await click(post);

    await click(find("[data-test-side-panel-close]"));

    /* This should not be on the DOM anymore */
    /* Also, Ember later is a-ma-zing */
    let sidePanelPostTitle = find("[data-test-side-panel-title]");
    assert.equal(sidePanelPostTitle, null);
  });
});
